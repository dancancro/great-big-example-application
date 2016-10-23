*** Settings ***
Default Tags    us1234
Resource    ../../../resources/features/login/rs_login.robot

Suite Setup    TEST SETUP
Suite Teardown    Exit Browser
Test Template    Login With Invalid Username

*** Variables ***
${LOGIN_URL}    http://localhost:8080/
${BROWSER}    Chrome

*** Test Cases ***                  USERNAME    PASSWORD        USERNAME ERROR            PASSWORD ERROR           LOGIN ERROR
01 Empty Username                   ${EMPTY}    somepass        Username is required.     ${EMPTY}                 ${EMPTY}
02 Empty Password                   someuser    ${EMPTY}        ${EMPTY}                  Password is required.    ${EMPTY}
03 Both Empty                       ${EMPTY}    ${EMPTY}        Username is required.     Password is required.    ${EMPTY}
04 Wrong Credentials                someuser    somepassword    ${EMPTY}                  ${EMPTY}                 Invalid username and password

*** Keywords ***
TEST SETUP
    Open Browser To Page    ${LOGIN_URL}    ${BROWSER}

Login With Invalid Username
    [Arguments]    ${username}    ${password}    ${username error}    ${password error}    ${login error}
    Login    ${username}    ${password}
    Run Keyword If    '${username error}' != '${EMPTY}'    Verify Login Username Error   ${username error}
    Run Keyword If    '${password error}' != '${EMPTY}'    Verify Login Password Error   ${password error}
    Run Keyword If       '${login error}' != '${EMPTY}'       Verify Login Error      ${username error}
