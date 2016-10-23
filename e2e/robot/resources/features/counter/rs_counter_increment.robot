*** Settings ***
Resource    ../../lib/browser/rs_browser.robot

*** Variables ***
${COUNTER COMPONENT ID}    counter
${COUNTER COMPONENT}       css=[data-testid="${COUNTER COMPONENT ID}"]
${COUNTER INCREMENT}          ${COUNTER COMPONENT} [data-testid="counter-incrementButton"]


*** Keywords ***
Verify Counter Increment Exist
    [Arguments]    ${should exist}=${TRUE}
    Run Keyword If    ${should exist} == ${TRUE}    Wait Until Keyword Succeeds    ${TOTAL WAIT}    ${RETRY EVERY}    Element Should Be Visible    ${COUNTER INCREMENT}
    Run Keyword If    ${should exist} == ${FALSE}    Wait Until Keyword Succeeds    ${TOTAL WAIT}    ${RETRY EVERY}    Element Should Not Be Visible    ${COUNTER INCREMENT}

Verify Counter Increment Enabled
    [Arguments]    ${should be enabled}
    Run Keyword If    ${should be enabled} == ${TRUE}    Wait Until Keyword Succeeds    ${TOTAL WAIT}    ${RETRY EVERY}    Element Should Be Enabled    ${COUNTER INCREMENT}
    Run Keyword If    ${should be enabled} == ${FALSE}    Wait Until Keyword Succeeds    ${TOTAL WAIT}    ${RETRY EVERY}    Element Should Be Disabled    ${COUNTER INCREMENT}

Verify Counter Increment Label
    [Arguments]    ${expected label}
    Wait Until Keyword Succeeds    ${TOTAL WAIT}    ${RETRY EVERY}    Element Should Contain    ${COUNTER INCREMENT}    ${expected label}

Click Counter Increment
    Wait Until Keyword Succeeds    ${TOTAL WAIT}    ${RETRY EVERY}    Click Element     ${COUNTER INCREMENT}
