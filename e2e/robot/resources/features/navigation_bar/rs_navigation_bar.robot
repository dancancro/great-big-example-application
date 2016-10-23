*** Settings ***
Resource    ../../lib/browser/rs_browser.robot
Resource    ./rs_navigation_bar_logout.robot
Resource    ./rs_navigation_bar_user_profile.robot

*** Variables ***
${NAVIAGTOR COMPONENT ID}    navigator
${NAVIAGTOR COMPONENT}       css=[data-testid="${NAVIAGTOR COMPONENT ID}"]
${NAVIAGTOR LINKS}           ${NAVIAGTOR COMPONENT} a


*** Keywords ***
Verify Navigator Link Count
    [Arguments]    ${expected count}
    @{links}=    Get Webelements    ${NAVIAGTOR LINKS}
    Length Should Be    ${links}    ${expected count}

Verify Navigator Has Link
    [Arguments]    ${expected link}    ${should exist}=${TRUE}
    @{links}=    Get Webelements    ${NAVIAGTOR LINKS}
    ${found}=    Set Variable    ${FALSE}
    ${found link}=    Set Variable    ${EMPTY}
    : FOR    ${link}    IN    @{links}
    \    ${link text}=    Get Text    ${link}
    \    ${found}=    Run Keyword And Return Status    Should Be Equal As Strings    ${expected link}    ${link text}
    \    ${found link}=    Set Variable If    '${found}' == '${TRUE}'    ${link}    ${EMPTY}
    \    Exit For Loop If    '${found}' == '${TRUE}'
    Should Be True    '${found}' == '${should exist}'
    [Return]    ${found link}

Navigate To
    [Arguments]    ${link name}
    ${link}=    Verify Navigator Has Link    ${link name}    ${TRUE}
    Wait Until Keyword Succeeds    ${TOTAL WAIT}    ${RETRY EVERY}    Click Element    ${link}
