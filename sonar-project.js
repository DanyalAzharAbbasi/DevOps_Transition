const scanner = require('sonarqube-scanner');

scanner(
  {
    serverUrl : 'http://10.0.3.46:9000',
    token : "sqp_af0f4273935139e01707323c94716660460a294e",
    options: {
      'sonar.projectName': 'Transition'
    }
  },
  () => process.exit()
)
