*** Settings ***
Resource    ../../lib/browser/rs_browser.robot

*** Variables ***
${COUNTER COMPONENT ID}    counter
${COUNTER COMPONENT}       css=[data-testid="${COUNTER COMPONENT ID}"]
${COUNTER DECREMENT}          ${COUNTER COMPONENT} [data-testid="counter-decrementButton"]


*** Keywords ***
Verify Counter Decrement Exist
    [Arguments]    ${should exist}=${TRUE}
    Run Keyword If    ${should exist} == ${TRUE}    Element Should Be Visible    ${COUNTER DECREMENT}
    Run Keyword If    ${should exist} == ${FALSE}    Element Should Not Be Visible    ${COUNTER DECREMENT}

Verify Counter Decrement Enabled
    [Arguments]    ${should be enabled}
    Run Keyword If    ${should be enabled} == ${TRUE}    Element Should Be Enabled    ${COUNTER DECREMENT}
    Run Keyword If    ${should be enabled} == ${FALSE}    Element Should Be Disabled    ${COUNTER DECREMENT}

Verify Counter Decrement Label
    [Arguments]    ${expected label}
    Wait Until Keyword Succeeds    ${TOTAL WAIT}    ${RETRY EVERY}    Element Should Contain    ${COUNTER DECREMENT}    ${expected label}

Click Counter Decrement
    Wait Until Keyword Succeeds    ${TOTAL WAIT}    ${RETRY EVERY}    Click Element     ${COUNTER DECREMENT}
