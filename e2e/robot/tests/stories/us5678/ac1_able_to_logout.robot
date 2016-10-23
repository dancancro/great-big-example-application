*** Settings ***
Default Tags    us5678
Resource    ../../../resources/features/login/rs_login.robot
Resource    ../../../resources/features/navigation_bar/rs_navigation_bar.robot

Suite Setup    TEST SETUP
Suite Teardown    Exit Browser

*** Variables ***
${LOGIN_URL}    http://localhost:8080/
${BROWSER}    Chrome
${USERNAME}    user
${PASSWORD}    pass

*** Test Cases ***
01 Verify Logout Button Exist
    Verify Navigator Logout Exist

02 Verify Logout Button Enabled
    Verify Navigator Logout Enabled    ${TRUE}

03 Verify Logout Button Label
    Verify Navigator Logout Label    Logout

04 Logout
    [Tags]    Smoke
    Click Navigator Logout
    Page Should Contain    Login

*** Keywords ***
TEST SETUP
    Open Browser To Page    ${LOGIN_URL}    ${BROWSER}
    Login    ${USERNAME}    ${PASSWORD}
    Wait While Login Is Loading
