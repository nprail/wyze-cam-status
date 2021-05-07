# Wyze Cam Status

```bash
# install dependencies
npm i

# create a .env file with WYZE_USERNAME and WYZE_PASSWORD

# start the server
npm run start
```

```bash
curl http://localhost:3025/?mac=4847A5B0E76A
```

### Response Example

```json
{
  "online": true,
  "device": {
    "mac": "4847A5B0E76A",
    "first_activation_ts": 1619562094000,
    "first_binding_ts": 1619562096000,
    "enr": "",
    "nickname": "Cam A",
    "timezone_name": "America/New_York",
    "product_model": "WYZE_CAKP2JFUS",
    "product_model_logo_url": "https://wyze-file.s3-us-west-2.amazonaws.com/system-logo/device/small/wyze_icon_cam_v3.png",
    "product_type": "Camera",
    "hardware_ver": "0.0.0.0",
    "firmware_ver": "4.35.0.212",
    "user_role": 1,
    "binding_user_nickname": "yoda@jedi.com",
    "conn_state": 1,
    "conn_state_ts": 1620338895399,
    "push_switch": 1,
    "device_params": {
        ...
    },
    "is_in_auto": 1,
    "event_master_switch": 1,
    "parent_device_mac": "",
    "parent_device_enr": "",
    "binding_ts": 1619562096000,
    "timezone_gmt_offset": -4
  }
}
```
