Q: Why is there one reducer for expanding all claims and another for expanding one instead of calling the single reducer for each claim? That's how the load reducers work.

A: When you are using the redux dev tools for playback, this will be one state change instead of many.