*** Settings ***
Resource    ../../lib/browser/rs_browser.robot
Resource    ./rs_counter_decrement.robot
Resource    ./rs_counter_increment.robot

*** Variables ***
${COUNTER COMPONENT ID}    counter
${COUNTER COMPONENT}       css=[data-testid="${COUNTER COMPONENT ID}"]
${COUNTER HEADING}         ${COUNTER COMPONENT} [data-testid="counter-heading"]
${COUNTER RESULT}          ${COUNTER COMPONENT} [data-testid="counter-result"]

*** Keywords ***
Verify Counter Exists
    [Arguments]    ${should exist}=${TRUE}
    Run Keyword If    '${should exist}' == '${TRUE}'    Element Should Be Visible    ${COUNTER COMPONENT}
    Run Keyword If    '${should exist}' == '${FALSE}'    Element Should Not Be Visible    ${COUNTER COMPONENT}

Increment Counter
    [Arguments]    ${amount}=1
    Repeat Keyword    ${amount}    Click Counter Increment

Decrement Counter
    [Arguments]    ${amount}=1
    Repeat Keyword    ${amount}    Click Counter Decrement

Verify Counter Result
    [Arguments]    ${expected result}
    Wait Until Keyword Succeeds    ${TOTAL WAIT}    ${RETRY EVERY}    Element Should Contain    ${COUNTER RESULT}    ${expected result}

Verify Counter Heading
    [Arguments]    ${expected heading}
    Wait Until Keyword Succeeds    ${TOTAL WAIT}    ${RETRY EVERY}    Element Should Contain    ${COUNTER HEADING}    ${expected heading}
