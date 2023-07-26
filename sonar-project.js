const scanner = require('sonarqube-scanner');

scanner(
  {
    serverUrl : 'http://192.168.10.4:9000',
    token : "sqp_6d5e7eacff2c1c532d31c4007a988f970c6add7b",
    options: {
      'sonar.projectName': 'Transition'
    }
  },
  () => process.exit()
)
