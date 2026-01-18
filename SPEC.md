In this case the file system represent clean architecture

Domain represents inner most layer
Application represent the middle layer
Infrastructure represent the outermost layer
Test is where test code is located.

It goes like this
Domain (Core Logic) → Application (Orchestration of Infrastructure) → Infrastructure (Implementation)

Test is separate and can access all layers for testing purposes.