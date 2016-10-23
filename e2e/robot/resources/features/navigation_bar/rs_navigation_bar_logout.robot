*** Settings ***
Resource    ../../lib/browser/rs_browser.robot

*** Variables ***
${NAVIAGTOR COMPONENT ID}    navigator
${NAVIAGTOR COMPONENT}       css=[data-testid="${NAVIAGTOR COMPONENT ID}"]
${NAVIAGTOR LOGOUT}          ${NAVIAGTOR COMPONENT} button


*** Keywords ***
Verify Navigator Logout Exist
    [Arguments]    ${should exist}=${TRUE}
    Run Keyword If    ${should exist} == ${TRUE}    Element Should Be Visible    ${NAVIAGTOR LOGOUT}
    Run Keyword If    ${should exist} == ${FALSE}    Element Should Not Be Visible    ${NAVIAGTOR LOGOUT}

Verify Navigator Logout Enabled
    [Arguments]    ${should be enabled}
    Run Keyword If    ${should be enabled} == ${TRUE}    Element Should Be Enabled    ${NAVIAGTOR LOGOUT}
    Run Keyword If    ${should be enabled} == ${FALSE}    Element Should Be Disabled    ${NAVIAGTOR LOGOUT}

Verify Navigator Logout Label
    [Arguments]    ${expected label}
    Wait Until Keyword Succeeds    ${TOTAL WAIT}    ${RETRY EVERY}    Element Should Contain    ${NAVIAGTOR LOGOUT}    ${expected label}

Click Navigator Logout
    Wait Until Keyword Succeeds    ${TOTAL WAIT}    ${RETRY EVERY}    Click Element     ${NAVIAGTOR LOGOUT}
