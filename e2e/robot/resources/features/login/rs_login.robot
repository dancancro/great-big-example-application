*** Settings ***
Resource    ./controls/login_submit.robot
Resource    ./password/login_password.robot
Resource    ./username/login_username.robot
Resource    ./loading_field/login_loading_field.robot
Resource    ./error_field/login_error_field.robot

*** Keywords ***
Login
    [Arguments]    ${username}    ${password}
    Input Login Username    ${username}
    Input Login Password    ${password}
    Click Login Submit Button

Verify No Login Error
    Verify Login Username Error Exist    ${FALSE}
    Verify Login Password Error Exist    ${FALSE}
    Verify Login Error Exists            ${FALSE}
