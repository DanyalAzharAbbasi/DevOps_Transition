const scanner = require('sonarqube-scanner');

scanner(
  {
    serverUrl : 'http://192.168.10.4:9000',
    token : "sqp_b7f39fab972756bb6b868c992fc578fcb1487f3f",
    options: {
      'sonar.projectName': 'Transition'
    }
  },
  () => process.exit()
)
