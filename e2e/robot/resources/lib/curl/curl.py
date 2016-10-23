"""A library for *curl*.
Add new keywords here to invoke curl in a desired way
 \`Get_Url_Status\`
 \`Check_For_Dead_Links\`.

"""
import subprocess
import re
import time
from selenium import webdriver
from selenium.common.exceptions import StaleElementReferenceException


class curl(object):
    ROBOT_LIBRARY_VERSION = 1.0
    
    local_url_identifier = ''
    start_url = ''
    main_attribute = ''
    main_element = ''
    pages_to_be_checked = []
    pages_already_checked = []
    links_already_checked = []
    failed_links = {}
    browser = None
    recursive = False
    stale_counter = 0
    
    def __init__(self):
        pass
    
    """This will check for the give startUrl for invalid links. Invalid link is one that does not return with '200' status.
    
    Parameters:
        browser_instance - an instance of a running browser which can be obtained by parent property of Webelement object 
            Example:
                ${body_element_of_page}=    Get Webelement   css=body
                ${browser_instance}=  Set Variable    ${body_element_of_page.parent}
        recursive - boolean True will recursively check each local url; boolean False will only check the status of the links found on the startUrl.
        startUrl - the start url where parsing should begin.
        localUrlIdentifier - a string to match against to determine if a url is local.
            Example:
                startUrl = http://www.google.com
                localUrlIdentifier = google\.com
                *NOTE* the dot is escaped with a slash to avoid it being treated as a wild token.
        attribute - the attribute of html element to be checked for; it can be href or src.
        element - optional element tag to limit search to particular html tags.
            Example:
            element = a #will look only at anchor elements
            element = img #will only look at image elements
            leaving 'element' blank will look at all elements which contain the specified attribute.
       Add new keywords here to invoke curl in a desired way
    """
    def Check_For_Dead_Links(self, browser_instance, recursive, startUrl, localUrlIdentifier, attribute, element=''):
        self.recursive = recursive
        self.local_url_identifier = localUrlIdentifier
        self.start_url = startUrl
        self.main_attribute = attribute
        self.main_element = element
        start_url_details = {}
        start_url_details['location'] = '<this is the starting url>'
        start_url_details[attribute] = self.start_url
        start_url_details['href'] = self.start_url
        start_url_details['text'] = ''
        start_url_details['selector'] = ''
        self.pages_to_be_checked.append(start_url_details)
        self.browser = browser_instance #webdriver.Chrome()
        while True:
            if len(self.pages_to_be_checked) == 0:
                break
            pageToCheck = self.pages_to_be_checked.pop(0)
            self._Parse_Page_For_Links(pageToCheck)
        return self.failed_links
    
    def _Parse_Page_For_Links(self, page_url):
        url = page_url[self.main_attribute]
        if url in self.pages_already_checked:
            return
        self.pages_already_checked.append(url)
        self.links_already_checked.append(url)
        url_status = self.Get_Url_Status(url)
        if not url_status.startswith('200 '): #if status is not 200 then it failed
            page_url['status'] = url_status
            self._Increment_Failed_Links(page_url)
            return
        self.browser.get(url)
        elements_to_check = self._Get_All_Elements_From_A_Page_With_Attribute(self.main_attribute, self.main_element)
        for element in elements_to_check:
            element['location'] = url
            self._Process_URL(element)

    def _Process_URL(self, link):
        link['status'] = 'assuming same as the first'
        url = link[self.main_attribute]
        if url in self.failed_links:
            self._Increment_Failed_Links(link)
            return
        if url in self.links_already_checked:
            return
        #mark it as checked
        self.links_already_checked.append(url)
        isLocal = self._Check_If_URL_Is_Local(url)
        urlStatus = self.Get_Url_Status(url)
        link['status'] = urlStatus
        if urlStatus.startswith('200 '):
            if isLocal and self.recursive: #if the url is local to the starting url then add it to pages to be checked if it is not already added
                if url not in self.pages_to_be_checked:
                    self.pages_to_be_checked.append(link)
            return # status of 200 means url is good
        self._Increment_Failed_Links(link) #if we got to this point that means the url failed

    def _Check_If_URL_Is_Local(self, url):
        checkIfLocal = re.compile('(\/\/' + self.local_url_identifier + ')|(\.' + self.local_url_identifier + ')')
        return checkIfLocal.search(url)

    def _Increment_Failed_Links(self, url_link):
        previousFails = []
        url = url_link[self.main_attribute]
        if url in self.failed_links:
            previousFails = self.failed_links[url]
        previousFails.append(url_link)
        self.failed_links[url] = previousFails

    def _Get_All_Elements_From_A_Page_With_Attribute(self, attribute, tagname=''):
        elements = self.browser.find_elements_by_css_selector(tagname + '[' + attribute + ']')
        result = []
        try:
            for element in elements:
                element_properties = {}
                element_properties['text'] = element.text if element.text != '' else '<no text>'
                element_properties[attribute] = element.get_attribute(attribute)
                element_properties['selector'] = self._Get_Element_Selector(element)
                result.append(element_properties)
        except StaleElementReferenceException as e:
            #sometimes the page is not fully loaded or is being reloaded when we try to interact with it
            #so we try calling ourselves again up to 3 times
            if self.stale_counter < 3:
                self.stale_counter += 1
                result = self._Get_All_Elements_From_A_Page_With_Attribute(attribute, tagname)
            else:
                #if we fail 3 times then something must be really wrong
                result = []
                element_properties = {}
                element_properties['text'] = 'failed to parse this page. it probably did not load in time.'
                element_properties[attribute] = ''
                element_properties['selector'] = ''
                result.append(element_properties)
        return result

    def _Get_Element_Selector(self, element):
        if (element == None):
            return ''
        element_tag = element.tag_name
        if element_tag == 'HTML':
            return 'HTML'
        element_selector = ''
        element_id = element.get_attribute('id')
        element_class = element.get_attribute('class')
        element_class = element_class.replace('\n', '').replace('\r', '')
        element_href = self._Get_WebElement_Attribute_Value(element, 'getAttribute("href")')
        element_href = element_href if element_href != None else ''
        element_src = self._Get_WebElement_Attribute_Value(element, 'getAttribute("src")')
        element_src = element_src if element_src != None else ''
        element_parent = self._Get_WebElement_Attribute_Value(element, 'parentElement')
        if element_id != '':
            return element_tag + '[id="' + element_id + '"]'
        element_selector = element_tag
        if element_class != '':
            element_selector += '[class="' + element_class + '"]'
        if element_href != '':
            element_selector += '[href="' + element_href + '"]'
        if element_src != '':
            element_selector += '[src="' + element_src + '"]'

        parent_selector = self._Get_Element_Selector(element_parent)
        element_selector = parent_selector + ' ' + element_selector
        return element_selector
        

    def _Get_WebElement_Attribute_Value(self, element, attribute):
        driver = element.parent
        script = 'var result = []; result.push(arguments[0].' + attribute + '); return result;'
        value = driver.execute_script(script, element)
        return value[0]

    def Get_Url_Status(self, url):
        """Invokes curl with -I -s flags to silently get the status from the specified url.
        Returns string: '<status code> <message>' for resolved host or 'invalid host' when host cannot be resolved.
        
        Example: Get Url Status    http://www.google.ca    #outputs '200 OK'
        
        Example: Get Url Status    http://blah.bah         #outputs 'invalid host'
        """
        process = subprocess.Popen(['curl', '-I', '-s', url], stdout=subprocess.PIPE)
        out, err = process.communicate()
        if out == '':
            status = 'invalid host'
        else:
            out_array = out.split("\r\n");
            status = out_array[0].split(" ", 1)[1];
        print '*INFO* Checked url {url_value} and got status {status_value}'.format(url_value=url, status_value=status)
        return status
