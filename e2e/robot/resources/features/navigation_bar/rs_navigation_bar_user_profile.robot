*** Settings ***
Resource    ../../lib/browser/rs_browser.robot
Resource    ./rs_navigation_bar_logout.robot

*** Variables ***
${NAVIAGTOR COMPONENT ID}    navigator
${NAVIAGTOR COMPONENT}       css=[data-testid="${NAVIAGTOR COMPONENT ID}"]
${NAVIAGTOR USER PROFILE}    ${NAVIAGTOR COMPONENT} [data-testid="user-profile"]


*** Keywords ***
Verify Navigator User Profile
    [Arguments]    ${expected profile}
    Wait Until Keyword Succeeds    ${TOTAL WAIT}    ${RETRY EVERY}    Element Should Contain    ${NAVIAGTOR USER PROFILE}    ${expected profile}
