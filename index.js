import fetch from "node-fetch";

class Model {
  constructor(token, name) {
    this.token = token;
    this.name = name;
  }
  /**
   * @function run
   * @description run the model
   * @param {string} input - input for the model
   * @param {boolean} json - whether to return the raw json or not
   * @returns {Promise}
   */
  run(input, json = false) {
    return new Promise((resolve, reject) => {
      fetch(`https://api-inference.huggingface.co/models/${this.name}`, {
        headers: { Authorization: `Bearer ${this.token}` },
        method: "POST",
        body: JSON.stringify({
          inputs: input,
        }),
      })
        .then((raw) => {
          raw.json().then((res) => {
            if (json) resolve(res);
            if (res[0]?.generated_text) {
              resolve(res[0].generated_text);
            }
            reject(res[0]);
          });
        })
        .catch((err) => {
          reject(err);
        });
    });
  }
}

/**
 * @class Client
 * @classdesc the client
 * @param {string} token - your access token
 */
export class Client {
  constructor(token) {
    this.token = token;
  }
  /**
   * @function model
   * @description get model
   * @param {string} name - model identifier/name
   * @returns {Model}
   */
  model(name) {
    return new Model(this.token, name);
  }
}
