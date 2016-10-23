*** Settings ***
Resource    ../../../lib/browser/rs_browser.robot

*** Variables ***
${LOGIN USERNAME COMPONENT ID}    login-username
${LOGIN USERNAME COMPONENT}       css=[data-testid="${LOGIN USERNAME COMPONENT ID}"]
${LOGIN USERNAME FIELD}           ${LOGIN USERNAME COMPONENT} input
${LOGIN USERNAME LABEL}           ${LOGIN USERNAME COMPONENT} label
${LOGIN USERNAME ERROR FIELD}     ${LOGIN USERNAME COMPONENT} [data-testid="form-error"]

*** Keywords ***
Input Login Username
    [Arguments]    ${username}
    Wait Until Keyword Succeeds    ${TOTAL WAIT}    ${RETRY EVERY}    Input Text Flex    ${LOGIN USERNAME FIELD}    ${username}

Verify Login Username Value
    [Arguments]    ${expected value}
    Wait Until Keyword Succeeds    ${TOTAL WAIT}    ${RETRY EVERY}    Textfield Should Contain    ${LOGIN USERNAME FIELD}    ${expected value}

Verify Input Login Username Exists
    [Arguments]    ${should exist}
    Run Keyword If    ${should exist} == ${TRUE}    Element Should Be Visible    ${LOGIN USERNAME FIELD}
    Run Keyword If    ${should exist} == ${FALSE}    Element Should Not Be Visible    ${LOGIN USERNAME FIELD}

Verify Input Login Username Is Enabled
    [Arguments]    ${should be enabled}
    Run Keyword If    ${should be enabled} == ${TRUE}    Element Should Be Enabled    ${LOGIN USERNAME FIELD}
    Run Keyword If    ${should be enabled} == ${FALSE}    Element Should Be Disabled    ${LOGIN USERNAME FIELD}

Verify Login Username Label
    [Arguments]    ${expected label}
    Wait Until Keyword Succeeds    ${TOTAL WAIT}    ${RETRY EVERY}    Element Should Contain    ${LOGIN USERNAME LABEL}    ${expected label}

Verify Login Username Placeholder
    [Arguments]    ${expected placeholder}
    ${actual placeholder}=    Wait Until Keyword Succeeds    ${TOTAL WAIT}    ${RETRY EVERY}    Get Element Attribute    ${LOGIN USERNAME FIELD}@placeholder
    Should Be Equal As Strings    ${expected placeholder}    ${actual placeholder}


Verify Login Username Error
    [Arguments]    ${error message}
    Wait Until Keyword Succeeds    ${TOTAL WAIT}    ${RETRY EVERY}    Element Should Contain    ${LOGIN USERNAME ERROR FIELD}    ${error message}

Verify Login Username Error Style
    [Arguments]    ${expected style}
    ${actual style}=    Wait Until Keyword Succeeds    ${TOTAL WAIT}    ${RETRY EVERY}    Get Element Attribute    ${LOGIN USERNAME ERROR FIELD}@style
    Should Be Equal As Strings    ${expected style}    ${actual style}

Verify Login Username Error Exist
    [Arguments]    ${should exist}
    Run Keyword If    ${should exist} == ${TRUE}    Wait Until Keyword Succeeds    ${TOTAL WAIT}    ${RETRY EVERY}    Element Should Be Visible    ${LOGIN USERNAME ERROR FIELD}
    Run Keyword If    ${should exist} == ${FALSE}    Wait Until Keyword Succeeds    ${TOTAL WAIT}    ${RETRY EVERY}    Element Should Not Be Visible    ${LOGIN USERNAME ERROR FIELD}
