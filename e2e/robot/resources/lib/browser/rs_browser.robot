*** Settings ***
Documentation    This resource meant to help with interacting with Browser Window
Library    Selenium2Library
Resource    rs_browserstack.robot

*** Variables ***
${BROWSER.DELAY}     0
${SELENIUM.DELAY}    0
${TOTAL WAIT}        10s
${RETRY EVERY}       2s

*** Keywords ***
Open Browser To Page
    [Arguments]    ${url}    ${browser}=Chrome    ${browser delay}=${BROWSER.DELAY}    ${selenium delay}=${SELENIUM.DELAY}
    ${BROWSERSTACK.ENABLE}=    Convert To Boolean    ${BROWSERSTACK.ENABLED
    Run Keyword If    ${BROWSERSTACK.ENABLED} == ${FALSE}    Open Browser    ${url}    browser=${browser}
    Run Keyword If    ${BROWSERSTACK.ENABLED} == ${TRUE} and '${BROWSERSTACK.PLATFORM}' == 'DESKTOP'    BrowserStack Run On Desktop    ${url}
    Run Keyword If    ${BROWSERSTACK.ENABLED} == ${TRUE} and '${BROWSERSTACK.PLATFORM}' != 'DESKTOP'    BrowserStack Run On Mobile    ${url}
    Run Keyword If    ${BROWSERSTACK.ENABLED} == ${TRUE} and '${BROWSERSTACK.PLATFORM}' == 'DESKTOP'    Maximize Browser Window
    Run Keyword If    ${BROWSERSTACK.ENABLED} == ${FALSE}    Maximize Browser Window
    Set Browser Delay    ${browser delay}    ${selenium delay}

Input Text Flex
    [Documentation]    This will type out desired text a character at a time. This is required for textfield which are linked to form validation in reaction which cause some events to be overwritten.
    [Arguments]    ${field}    ${text}    ${clear field first}=${TRUE}
    Click Element    ${field}
    Focus    ${field}
    Run Keyword If    '${clear field first}' == '${TRUE}'    Clear Text Flex    ${field}
    ${text size}=    Get Length    ${text}
    : FOR    ${index}    IN RANGE    ${text size}
    \    Press Key    ${field}    ${text[${index}]}

Clear Text Flex
    [Documentation]    This will type out desired text a character at a time. This is required for textfield which are linked to form validation in reaction which cause some events to be overwritten.
    [Arguments]    ${field}
    Click Element    ${field}
    Focus    ${field}
    : FOR    ${index}    IN RANGE    256
    \    ${current text}=    Get Element Attribute    ${field}@value
    \    Exit For Loop If    '${current text}' == '${EMPTY}'
    \    Press Key    ${field}    \ue003    #DELETE FORWARD
    \    Press Key    ${field}    \ue017    #DELETE BACKWARD


Scroll Browser
    [Arguments]    ${x}=0    ${y}=0
    Execute Javascript    window.scrollTo(${x}, ${y});

Scroll Browser To Top
    Scroll Browser    0    0

Scroll Browser To Bottom
    Scroll Browser    0    document.body.scrollHeight

Exit Browser
    Close All Browsers

Page Title Should Be
    [Arguments]    ${page title}
    Wait Until Keyword Succeeds    ${TOTAL WAIT}    ${RETRY EVERY}    Title Should Be    ${page title}

Set Browser Delay
    [Arguments]    ${browser wait}=1    ${selenium speed}=0.2
    Set Browser Implicit Wait    ${browser wait}
    Set Selenium Speed    ${selenium speed}
