*** Settings ***
Library    ../../../resources/lib/curl/curl.py
Test Template    Verify Url Status

*** Test Cases ***         URL                                                STATUS
01 Rangle.io               http://rangle.io                                   200 OK
02 Rangle.io work          http://rangle.io/work/                             200 OK
03 Rangle.io blah          http://rangle.io/blah                              404 Not Found
03 Invalid Host            http://blah                                        invalid host
04 JS                      http://d1l6p2sc9645hc.cloudfront.net/tracker.js    200 OK

*** Keywords ***
Verify Url Status
    [Arguments]    ${url}    ${expected status}
    ${actual status}=    Get Url Status    ${url}
    Should Be Equal As Strings    ${actual status}    ${expected status}
