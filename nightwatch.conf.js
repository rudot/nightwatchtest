module.exports = {
    "src_folders" : ["tests"],
    "page_objects_path" : ["page-objects"], 
    "webdriver" : {
      "start_process": true,
      "server_path": "node_modules\\.bin\\chromedriver.cmd",
      "port": 9515
    },

    "webdriverMac" : {
      "start_process": true,
      "server_path": "node_modules/.bin/chromedriver.cmd",
      "port": 9515
    },
  
    "test_settings" : {
      "default" : {
        "desiredCapabilities": {
          "browserName": "chrome"
        }
      },
      "firefox" : {
        "desiredCapabilities": {
          "browserName": "firefox"
        }
      }
    }      
}