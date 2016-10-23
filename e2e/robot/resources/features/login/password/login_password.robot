*** Settings ***
Resource    ../../../lib/browser/rs_browser.robot

*** Variables ***
${LOGIN PASSWORD COMPONENT ID}    login-password
${LOGIN PASSWORD COMPONENT}       css=[data-testid="${LOGIN PASSWORD COMPONENT ID}"]
${LOGIN PASSWORD FIELD}           ${LOGIN PASSWORD COMPONENT} input
${LOGIN PASSWORD LABEL}           ${LOGIN PASSWORD COMPONENT} label
${LOGIN PASSWORD ERROR FIELD}     ${LOGIN PASSWORD COMPONENT} [data-testid="form-error"]

*** Keywords ***
Input Login Password
    [Arguments]    ${password}    ${secure input}=${FALSE}
    Run Keyword If    '${secure input}' == '${FALSE}'    Wait Until Keyword Succeeds    ${TOTAL WAIT}    ${RETRY EVERY}    Input Text Flex    ${LOGIN PASSWORD FIELD}    ${password}
    Run Keyword If    '${secure input}' == '${TRUE}'    Wait Until Keyword Succeeds    ${TOTAL WAIT}    ${RETRY EVERY}    Input Password    ${LOGIN PASSWORD FIELD}    ${password}

Verify Login Password Value
    [Arguments]    ${expected value}
    #NOTE: Using Get Text or Textfield Should Contain, etc doesn't work on password fields
    ${actual password}=    Wait Until Keyword Succeeds    ${TOTAL WAIT}    ${RETRY EVERY}    Get Element Attribute    ${LOGIN PASSWORD FIELD}@value
    Should Be Equal As Strings    ${actual password}    ${expected value}

Verify Input Login Password Exists
    [Arguments]    ${should exist}
    Run Keyword If    ${should exist} == ${TRUE}    Element Should Be Visible    ${LOGIN PASSWORD FIELD}
    Run Keyword If    ${should exist} == ${FALSE}    Element Should Not Be Visible    ${LOGIN PASSWORD FIELD}

Verify Input Login Password Is Enabled
    [Arguments]    ${should be enabled}
    Run Keyword If    ${should be enabled} == ${TRUE}    Element Should Be Enabled    ${LOGIN PASSWORD FIELD}
    Run Keyword If    ${should be enabled} == ${FALSE}    Element Should Be Disabled    ${LOGIN PASSWORD FIELD}

Verify Login Password Label
    [Arguments]    ${expected label}
    Wait Until Keyword Succeeds    ${TOTAL WAIT}    ${RETRY EVERY}    Element Should Contain    ${LOGIN PASSWORD LABEL}    ${expected label}

Verify Login Password Placeholder
    [Arguments]    ${expected placeholder}
    ${actual placeholder}=    Wait Until Keyword Succeeds    ${TOTAL WAIT}    ${RETRY EVERY}    Get Element Attribute    ${LOGIN PASSWORD FIELD}@placeholder
    Should Be Equal As Strings    ${expected placeholder}    ${actual placeholder}

Verify Login Password Error
    [Arguments]    ${error message}
    Wait Until Keyword Succeeds    ${TOTAL WAIT}    ${RETRY EVERY}    Element Should Contain    ${LOGIN PASSWORD ERROR FIELD}    ${error message}

Verify Login Password Error Style
    [Arguments]    ${expected style}
    ${actual style}=    Wait Until Keyword Succeeds    ${TOTAL WAIT}    ${RETRY EVERY}    Get Element Attribute    ${LOGIN PASSWORD ERROR FIELD}@style
    Should Be Equal As Strings    ${expected style}    ${actual style}

Verify Login Password Error Exist
    [Arguments]    ${should exist}
    Run Keyword If    ${should exist} == ${TRUE}    Wait Until Keyword Succeeds    ${TOTAL WAIT}    ${RETRY EVERY}    Element Should Be Visible    ${LOGIN PASSWORD ERROR FIELD}
    Run Keyword If    ${should exist} == ${FALSE}    Wait Until Keyword Succeeds    ${TOTAL WAIT}    ${RETRY EVERY}    Element Should Not Be Visible    ${LOGIN PASSWORD ERROR FIELD}
