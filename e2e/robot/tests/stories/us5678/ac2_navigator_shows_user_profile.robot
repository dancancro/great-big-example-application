*** Settings ***
Default Tags    us5678
Resource    ../../../resources/features/login/rs_login.robot
Resource    ../../../resources/features/navigation_bar/rs_navigation_bar.robot

Suite Setup    SUITE SETUP
Suite Teardown    Exit Browser
Test Template    Check User Profile
Test Teardown    Logout

*** Variables ***
${LOGIN_URL}    http://localhost:8080/
${BROWSER}    Chrome

*** Test Cases ***    USERNAME    PASSWORD        PROFILE
01 Super Dave         admin       superuser       Super Dave
02 Guest Visitor      guest       letmein         Guest Visitor
03 John Doe           user        pass            John Doe
04 Alice Carrol       alice       x               Alice Carrol

*** Keywords ***
SUITE SETUP
    Open Browser To Page    ${LOGIN_URL}    ${BROWSER}

Check User Profile
    [Arguments]    ${username}    ${password}    ${profile}
    Login    ${username}    ${password}
    Wait While Login Is Loading
    Verify Navigator User Profile    ${profile}

Logout
    Click Navigator Logout
