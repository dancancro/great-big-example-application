*** Settings ***
Resource    ../../resources/lib/browser/rs_browser.robot
Library    ../../resources/lib/curl/curl.py
Library    Collections
Library    String
Library    OperatingSystem

Suite Setup    TEST SETUP
Suite Teardown    Exit Browser

*** Variables ***
${LOCAL_LINK_IDENTIFIER}    localhost\:8080
${START_URL}    http://localhost:8080
${BROWSER}    Chrome
${BROWSER_INSTANCE}

${FAILOUTPUTFILE}    results/failedurls.html

*** Test Cases ***
00 Check Main Page
    [Tags]    Disabled
    #Enable this by remoing the Disabled tag when you want to check for dead links
    ${dead links}=  Check For Dead Links    ${BROWSER_INSTANCE}    ${FALSE}    ${START_URL}    ${LOCAL_LINK_IDENTIFIER}    href
    Log Results    ${dead links}
    Should Be Empty    ${dead links}

*** Keywords ***
TEST SETUP
    Open Browser To Page    ${START_URL}    ${BROWSER}
    ${BROWSER_INSTANCE}=    Get Webelement    css=body
    Set Suite Variable    ${BROWSER_INSTANCE}    ${BROWSER_INSTANCE.parent}

Log Results
    [Arguments]    ${failed urls}
    @{urls}=    Get Dictionary Keys    ${failed urls}
    Create File    ${FAILOUTPUTFILE}
    Log To File    <html><head><title>Failed URLs</title></head><body>\r
    Log To File    <h1>Here is a list of failed links.</h1>
    Log To File    <h3>Insturctions:</h3>
    Log To File    <ul>
    Log To File    <li>Click on any table cell will copy it's text into clipboard.</li>
    Log To File    <li>Table's caption represents the failed link.</li>
    Log To File    <li>Location is the page where the link can be found.</li>
    Log To File    <li>Text is the inner text of the link.</li>
    Log To File    <li>Selector is used to find the link on the page.</li>
    Log To File    </ul>
    Log To File    <h5>To find a desired link on a given page:</h5>
    Log To File    <ol>
    Log To File    <li>Open the desired locaiton in Chrome.</li>
    Log To File    <li>Open Chrome's Inspector (right-click->inspect).</li>
    Log To File    <li>Click in the inspector.</li>
    Log To File    <li>Open the search field (command + f).</li>
    Log To File    <li>Paste the selector into the search field.</li>
    Log To File    </ol>
    Log To File    <SCRIPT LANGUAGE="JavaScript">
    Log To File    function copyText(text) {
    Log To File    var textHolder = document.getElementById('textholder');
    Log To File    textHolder.disabled=false;
    Log To File    textHolder.style = "";
    Log To File    textHolder.innerHTML = text;
    Log To File    textHolder.select();
    Log To File    document.execCommand("Copy");
    Log To File    textHolder.innerHTML = "";
    Log To File    textHolder.disabled = true;
    Log To File    textHolder.style = "display:none";
    Log To File    }
    Log To File    </SCRIPT>
    : FOR    ${link}    IN    @{urls}
    \    @{locations}=    Get From Dictionary    ${failed urls}    ${link}
    \    Log Url Locations    ${link}    ${locations}
    Log To File    <textarea id="textholder" cols="1" style="display:none"></textarea></body></html>\r

Log Url Locations
    [Arguments]    ${url}    ${locations}
    Log To File    <div style="margin-top: 20">
    Log To File    <table border="1" width="100%" align="center">
    Log To File    <caption style="text-align:left" onClick="copyText(this.innerHTML)">${url}</caption>
    Log To File    <thead>
    Log To File    <tr>
    Log To File    <th align="left">Location</th>
    Log To File    <th>Text</th>
    Log To File    <th>Resolved Href</th>
    Log To File    <th>Selector</th>
    Log To File    <th>Status</th>
    Log To File    </tr>
    Log To File    </thead>
    Log To File    <tbody>
    : FOR    ${location}    IN    @{locations}
    \    Log To File    <tr align="center">
    \    Log To File    <td align="left"><a target="_tab" href="&{location}[location]" onClick="copyText(this.innerHTML)">&{location}[location]</a></td>
    \    Log To File    <td onClick="copyText(this.innerHTML)">&{location}[text]</td>
    \    Log To File    <td><a target="_tab" href="&{location}[href]" onClick="copyText(this.innerHTML)">&{location}[href]</a></td>
    \    Log To File    <td onClick="copyText(this.innerHTML)">&{location}[selector]</td>
    \    Log To File    <td onClick="copyText(this.innerHTML)">&{location}[status]</td>
    \    Log To File    </tr>
    Log To File    </tbody>
    Log To File    </table>
    Log To File    </div>

Log To File
    [Arguments]    ${message}
    Append To File    ${FAILOUTPUTFILE}    ${message}
