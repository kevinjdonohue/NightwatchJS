/* using built-in Mocha */
/* NOTE:  Can use stand alone Mocha -- just more boilerplate? */

// describe('Google demo test for Mocha', () => {
//   describe('with Nightwatch', () => {
//     before((client, done) => {
//       done();
//     });

//     after((client, done) => {
//       client.end(() => {
//         done();
//       });
//     });

//     afterEach((client, done) => {
//       done();
//     });

//     beforeEach((client, done) => {
//       done();
//     });

//     it('uses BDD to run the Google simple test', client => {
//       client
//         .url('http://google.com')
//         .expect.element('body')
//         .to.be.present.before(1500);

//       client
//         .setValue('input[type=text]', ['nightwatch', client.Keys.ENTER])
//         .pause(1500)
//         .assert.containsText('#main', 'Night Watch');
//     });
//   });
// });

describe('Mercury Tests', () => {
  describe('Homepage', () => {
    before((client, done) => {
      done();
    });

    after((client, done) => {
      client.end(() => {
        done();
      });
    });

    afterEach((client, done) => {
      done();
    });

    beforeEach((client, done) => {
      done();
    });

    it('loads the homepage', client => {
      client
        .url('as:mercury@http://alaskaaircomreact-qa.trafficmanager.net')
        .expect.element('body')
        .to.be.present.before(5000);

      // TODO:  search for page title and then assert it is a particular string

      // client
      //   .setValue('input[type=text]', ['nightwatch', client.Keys.ENTER])
      //   .pause(1500)
      //   .assert.containsText('#main', 'Night Watch');
    });
  });
});
