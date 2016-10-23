#!/bin/bash

DIR="./e2e/robot" #path to the robot project

test_location="$DIR/tests" #the location where all tests are
output_dir="$DIR/results/desktop/local/chrome" #location where result logs will go

test_cases=() #add individual tests bellow
#test_cases+=("Test Name")

include_tags=() #add tests based on Tags below
include_tags+=("Smoke")

exclude_tags=()
exclude_tags+=("Disabled")
exclude_tags+=("Skip")
exclude_tags+=("Manual")

test_variables=() #add test variables to be overwritten
test_variables+=("BROWSER:Chrome")
test_variables+=("LOGIN_URL:http://localhost:8080")

browserstack=()
browserstack+=("BROWSERSTACK.ENABLED:False")

#add valid robot argument tags to all arrays
browserstack=("${browserstack[@]/#/-v }")
test_variables=("${test_variables[@]/#/-v }")
include_tags=("${include_tags[@]/#/-i }")
exclude_tags=("${exclude_tags[@]/#/-e }")
test_cases=("${test_cases[@]/#/-t }")

final_arguments=()
final_arguments+=("${browserstack[@]}")
final_arguments+=("${test_variables[@]}")
final_arguments+=("${include_tags[@]}")
final_arguments+=("${exclude_tags[@]}")
final_arguments+=("${test_cases[@]}")

echo "Running robot with arguments:"
for argument in "${final_arguments[@]}"
do
   :
   echo -e '\t' $argument
done

echo "Test location: "
echo -e '\t' $test_location
echo "Results location: "
echo -e '\t' $output_dir
echo

robot "${final_arguments[@]}" -d "$output_dir" "$test_location"
