const http = require('http');

const {
  Copyleaks,
  CopyleaksConfig,
  CopyleaksURLSubmissionModel,
  CopyleaksFileSubmissionModel,
  CopyleaksFileOcrSubmissionModel,
  CopyleaksDeleteRequestModel,
  CopyleaksExportModel
} = require('copyleaks-sdk-nodejs');

const base64Img = require('./base64.img');

// CopyleaksConfig.API_SERVER_URI = "https://api.copyleaks.com";
// CopyleaksConfig.IDENTITY_SERVER_URI = "https://id.copyleaks.com";

const hostname = '127.0.0.1';
const port = 3000;


const DEMO_EMAIL = '<EMAIL>'; // change this with your own copyleaks email.
const DEMO_KEY = '<API_KEY>'; // change this with your own copyleaks API key.
const WEBHOOK_URL = '<WEBHOOK_URL>'; //exe https://glacial-refuge-96501.herokuapp.com/10b0z2w1
const copyleaks = new Copyleaks();

let testingInProgress = false;

const server = http.createServer((req, res) => {
  res.statusCode = 200;

  TEST_copyleaks();

  res.setHeader('Content-Type', 'text/plain');
  res.end('started testing - check logs');
});

TEST_copyleaks = () => {
  if (testingInProgress) {
    return;
  }
  testingInProgress = true;


  // Login
  copyleaks.loginAsync(DEMO_EMAIL, DEMO_KEY)
    .then(
      loginResult => {
        logSuccess('loginAsync', loginResult);

        // TEST_MISC();

        TEST_CreditsBalance(loginResult);

        // TEST_UsageHistory(loginResult);

        // TEST_submitUrlAsync(loginResult);

        // TEST_submitFileAsync(loginResult);

        // TEST_submitOcrFileAsync(loginResult);

        // TEST_deleteScanAsync(loginResult);

        // TEST_exportAsync(loginResult);

      },
      err => logError('loginAsync', err)
    )
}

function TEST_MISC() {
  // OCR Supported Languages
  copyleaks.getOCRSupportedLanguagesAsync()
    .then(
      loginResult => {
        logSuccess('getOCRSupportedLanguagesAsync', loginResult);
      },
      err => logError('getOCRSupportedLanguagesAsync', err)
    )
  // Supported File Types
  copyleaks.getSupportedFileTypesAsync()
    .then(
      loginResult => {
        logSuccess('getSupportedFileTypesAsync', loginResult);
      },
      err => logError('getSupportedFileTypesAsync', err)
    )
  // Release Notes
  copyleaks.getReleaseNotesAsync()
    .then(
      loginResult => {
        logSuccess('getReleaseNotesAsync', loginResult);
      },
      err => logError('getReleaseNotesAsync', err)
    )
}

function TEST_CreditsBalance(loginResult) {

  copyleaks.getCreditsBalanceAsync('businesses', loginResult).then(res => logSuccess('getCreditsBalanceAsync - business', res), err => logError('getCreditsBalanceAsync - business', err));
  copyleaks.getCreditsBalanceAsync('education', loginResult).then(res => logSuccess('getCreditsBalanceAsync - education', res), err => logError('getCreditsBalanceAsync - education', err));
}

function TEST_UsageHistory(loginResult) {
  copyleaks.getUsagesHistoryCsvAsync('businesses', loginResult, '01-01-2020', '02-02-2020').then(res => logSuccess('getUsagesHistoryCsvAsync - businesses', res), err => logError('getUsagesHistoryCsvAsync - businesses', err));
  copyleaks.getUsagesHistoryCsvAsync('education', loginResult, '01-01-2020', '02-02-2020').then(res => logSuccess('getUsagesHistoryCsvAsync - education', res), err => logError('getUsagesHistoryCsvAsync - education', err));
}

function TEST_submitUrlAsync(loginResult) {

  var submission = new CopyleaksURLSubmissionModel(
    'https://copyleaks.com',
    {

      sandbox: true,
      webhooks: {
        status: `${WEBHOOK_URL}/submit-url-webhook/{STATUS}`
      }
    }
  );

  copyleaks.submitUrlAsync('education', loginResult, Date.now() + 1, submission).then(res => logSuccess('submitUrlAsync - education', res), err => { logError('submitUrlAsync - education', err) });
  copyleaks.submitUrlAsync('businesses', loginResult, Date.now() + 2, submission).then(res => logSuccess('submitUrlAsync - businesses', res), err => logError('submitUrlAsync - businesses', err));
}

function TEST_submitFileAsync(loginResult) {

  var submission = new CopyleaksFileSubmissionModel(
    'aGVsbG8gd29ybGQ=',
    'nodejs-sdk-demo.txt',
    {
      sandbox: true,
      webhooks: {
        status: `${WEBHOOK_URL}/submit-file-webhook/{STATUS}`
      }
    }
  );

  copyleaks.submitFileAsync('education', loginResult, Date.now() + 1, submission).then(res => logSuccess('submitFileAsync - education', res), err => { logError('submitFileAsync - education', err) });
  copyleaks.submitFileAsync('businesses', loginResult, Date.now() + 2, submission).then(res => logSuccess('submitFileAsync - businesses', res), err => logError('submitFileAsync - businesses', err));
}

function TEST_submitOcrFileAsync(loginResult) {

  var submission = new CopyleaksFileOcrSubmissionModel(
    'en',
    base64Img,
    'nodejs-sdk-demo.txt',
    {
      sandbox: true,
      webhooks: {
        status: `${WEBHOOK_URL}/submit-file-ocr-webhook/{STATUS}`
      }
    }
  );

  copyleaks.submitFileOcrAsync('education', loginResult, Date.now() + 1, submission).then(res => logSuccess('submitFileOcrAsync - education', res), err => { logError('submitFileOcrAsync - education', err) });
  copyleaks.submitFileOcrAsync('businesses', loginResult, Date.now() + 2, submission).then(res => logSuccess('submitFileOcrAsync - businesses', res), err => logError('submitFileOcrAsync - businesses', err));
}

function TEST_deleteScanAsync(loginResult) {
  if (educationScanId.length) {
    const model = new CopyleaksDeleteRequestModel(
      // add your own education ids to remove
      ['1610626300310'].map(id => ({ id })),
      false,
      `${WEBHOOK_URL}/delete-education`
    )
    copyleaks.deleteAsync('education', loginResult, model).then(res => logSuccess('deleteAsync - education', res), err => { logError('deleteAsync - education', err) });;
  }
  if (businessesScanId.length) {
    const model = new CopyleaksDeleteRequestModel(
      // add your own businesses ids to remove
      ['1610626300311'].map(id => ({ id })),
      false,
      `${WEBHOOK_URL}/delete-businesses`
    )
    copyleaks.deleteAsync('businesses', loginResult, model).then(res => logSuccess('deleteAsync - businesses', res), err => { logError('deleteAsync - businesses', err) });;;
  }
}

function TEST_exportAsync(loginResult) {
  var scanId = "1610625417127"; // change this with your own scanId

  const model = new CopyleaksExportModel(
    `${WEBHOOK_URL}/export/scanId/${scanId}/completion`,
    [
      // results
      {
        id: '2a1b402420', // change this with your own result Id
        endpoint: `${WEBHOOK_URL}/export/${scanId}/result/2a1b402420`,
        verb: 'POST',
        headers: [['key', 'value'], ['key2', 'value2']]
      }
    ],
    {
      // crawled version
      endpoint: `${WEBHOOK_URL}/export/${scanId}/crawled-version`,
      verb: 'POST',
      headers: [['key', 'value'], ['key2', 'value2']]
    }
  );

  copyleaks.exportAsync(loginResult, scanId, scanId, model).then(res => logSuccess('exportAsync', res), err => { logError('exportAsync', err) });
}

function logError(title, err) {
  console.error('----------ERROR----------');
  console.error(`${title}:`);
  console.error(err);
  console.error('-------------------------');
}

function logSuccess(title, result) {
  console.log('----------SUCCESS----------');
  console.log(`${title}`);
  if (result) {
    console.log(`result:`);
    console.log(result);
  }
  console.log('-------------------------');
}

server.listen(port, hostname, () => {
  console.log(`please visit http://${hostname}:${port}/ to start the test`);
});