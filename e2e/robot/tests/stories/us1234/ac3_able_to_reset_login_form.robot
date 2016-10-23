*** Settings ***
Default Tags    us1234
Resource    ../../../resources/features/login/rs_login.robot

Suite Setup    TEST SETUP
Suite Teardown    Exit Browser

*** Variables ***
${LOGIN_URL}    http://localhost:8080/
${BROWSER}    Chrome

*** Test Cases ***
01 Reset Clears Username Field
    Input Login Username    someusername
    Click Login Reset Button
    Verify Login Username Value    ${EMPTY}

02 Reset Clears Username Error
    [Tags]    Disabled    Bug
    #THIS TEST FAILS BECAUSE THERE IS A RACE BETWEEN LOSE FOCUS AND CLICK BUTTON
    Input Login Username    ${EMPTY}
    Click Login Reset Button
    Verify Login Username Error Exist    ${FALSE}

03 Reset Clears Password Field
    Input Login Password    somepassword
    Click Login Reset Button
    Verify Login Password Value    ${EMPTY}

04 Reset Clears Password Error
    [Tags]    Disabled    Bug
    #THIS TEST FAILS BECAUSE THERE IS A RACE BETWEEN LOSE FOCUS AND CLICK BUTTON
    Input Login Username    ${EMPTY}
    Click Login Reset Button
    Verify Login Password Error Exist    ${FALSE}

05 Reset Does Not Clear Login Error
    #[Tags]    Disabled    Bug
    #this also appears to be a bug
    #hasError is not being reset to default value of TRUE
    Login    someusername    somepassword
    Click Login Reset Button
    Verify Login Error Exists    ${FALSE}

*** Keywords ***
TEST SETUP
    Open Browser To Page    ${LOGIN_URL}    ${BROWSER}
