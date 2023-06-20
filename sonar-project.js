const scanner = require('sonarqube-scanner');

scanner(
  {
    serverUrl : 'http://10.0.8.56:9000',
    token : "sqp_9f76ee305dbb56a9b3671337e535a827acd3ad4d",
    options: {
      'sonar.projectName': 'transition'
    }
  },
  () => process.exit()
)
