const scanner = require('sonarqube-scanner');

scanner(
  {
    serverUrl : 'http://10.0.3.46:9000',
    token : "sqp_6d5e7eacff2c1c532d31c4007a988f970c6add7b",
    login: "admin",
    password: "12345",
    options: {
      'sonar.projectName': 'Transition'
    }
  },
  () => process.exit()
)
