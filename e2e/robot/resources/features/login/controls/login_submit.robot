*** Settings ***
Resource    ../../../lib/browser/rs_browser.robot

*** Variables ***
${LOGIN SUBMIT COMPONENT ID}    login-submit
${LOGIN SUBMIT COMPONENT}       css=[data-testid="${LOGIN SUBMIT COMPONENT ID}"]
${LOGIN SUBMIT BUTTON}          ${LOGIN SUBMIT COMPONENT} [type="submit"]
${LOGIN RESET BUTTON}           ${LOGIN SUBMIT COMPONENT} [type="reset"]

*** Keywords ***
Focus Login Submit Button
    Focus    ${LOGIN SUBMIT BUTTON}

Click Login Submit Button
    Wait Until Keyword Succeeds    ${TOTAL WAIT}    ${RETRY EVERY}    Click Element    ${LOGIN SUBMIT BUTTON}

Click Login Reset Button
    Wait Until Keyword Succeeds    ${TOTAL WAIT}    ${RETRY EVERY}    Click Element    ${LOGIN RESET BUTTON}

Verify Login Submit Button Exists
    [Arguments]    ${should exist}
    Run Keyword If    ${should exist} == ${TRUE}    Wait Until Keyword Succeeds    ${TOTAL WAIT}    ${RETRY EVERY}    Element Should Be Visible    ${LOGIN SUBMIT BUTTON}
    Run Keyword If    ${should exist} == ${FALSE}    Wait Until Keyword Succeeds    ${TOTAL WAIT}    ${RETRY EVERY}    Element Should Not Be Visible    ${LOGIN SUBMIT BUTTON}

Verify Login Reset Button Exists
    [Arguments]    ${should exist}
    Run Keyword If    ${should exist} == ${TRUE}    Wait Until Keyword Succeeds    ${TOTAL WAIT}    ${RETRY EVERY}    Element Should Be Visible    ${LOGIN RESET BUTTON}
    Run Keyword If    ${should exist} == ${FALSE}    Wait Until Keyword Succeeds    ${TOTAL WAIT}    ${RETRY EVERY}    Element Should Not Be Visible    ${LOGIN RESET BUTTON}

Verify Login Submit Button Label
    [Arguments]    ${expected label}
    Wait Until Keyword Succeeds    ${TOTAL WAIT}    ${RETRY EVERY}    Element Should Contain    ${LOGIN SUBMIT BUTTON}    ${expected label}

Verify Login Reset Button Label
    [Arguments]    ${expected label}
    Wait Until Keyword Succeeds    ${TOTAL WAIT}    ${RETRY EVERY}    Element Should Contain    ${LOGIN RESET BUTTON}    ${expected label}
