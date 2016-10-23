*** Settings ***
Resource    ../../../lib/browser/rs_browser.robot

*** Variables ***
${LOGIN LOADING FIELD ID}    alert-loading
${LOGIN LOADING FIELD}       css=[data-testid="${LOGIN LOADING FIELD ID}"]

*** Keywords ***
Verify Loading Field Exists
    [Arguments]    ${should exist}
    Run Keyword If    '${should exist}' == '${TRUE}'    Wait Until Keyword Succeeds    ${TOTAL WAIT}    ${RETRY EVERY}    Element Should Be Visible    ${LOGIN LOADING FIELD}
    Run Keyword If    '${should exist}' == '${FALSE}'    Wait Until Keyword Succeeds    ${TOTAL WAIT}    ${RETRY EVERY}    Element Should Not Be Visible    ${LOGIN LOADING FIELD}

Verify Loading Field Message
    [Arguments]    ${expected message}
    Wait Until Keyword Succeeds    ${TOTAL WAIT}    ${RETRY EVERY}    Element Should Contain    ${LOGIN LOADING FIELD}    ${expected message}

Wait While Login Is Loading
    [Arguments]    ${total wait time}=10s
    Wait Until Keyword Succeeds    ${total wait time}    ${RETRY EVERY}    Element Should Not Be Visible    ${LOGIN LOADING FIELD}
