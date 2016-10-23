*** Settings ***
Resource    ../../../lib/browser/rs_browser.robot

*** Variables ***
${LOGIN ERROR MESSAGE FIELD ID}    alert-error
${LOGIN ERROR MESSAGE FIELD}       css=[data-testid="${LOGIN ERROR MESSAGE FIELD ID}"]

*** Keywords ***
Verify Login Error Exists
    [Arguments]    ${should exist}
    Run Keyword If    '${should exist}' == '${TRUE}'    Wait Until Keyword Succeeds    ${TOTAL WAIT}    ${RETRY EVERY}    Element Should Be Visible    ${LOGIN ERROR MESSAGE FIELD}
    Run Keyword If    '${should exist}' == '${FALSE}'    Wait Until Keyword Succeeds    ${TOTAL WAIT}    ${RETRY EVERY}    Element Should Not Be Visible    ${LOGIN ERROR MESSAGE FIELD}

Verify Login Error
    [Arguments]    ${expected error message}
    Wait Until Keyword Succeeds    ${TOTAL WAIT}    ${RETRY EVERY}    Element Should Contain    ${LOGIN ERROR MESSAGE FIELD}    ${expected error message}
