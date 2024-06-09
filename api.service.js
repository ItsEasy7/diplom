"use strict";

const dotenv = require("dotenv");
dotenv.config({ path: "/home/molterez/moleculer-demo/process.env" });
const ApiGateway = require("moleculer-web");

module.exports = {
	name: "api",
	mixins: [ApiGateway],
	settings: {
		port: process.env.PORT || 3000,
		routes: [
			{
				path: "/api",

				whitelist: [
					"**"
				],

				mergeParams: true,

				authentication: false,

				authorization: false,

				autoAliases: true,

				aliases: {},

				callOptions: {},

				bodyParsers: {
					json: true,
					urlencoded: { extended: true }
				},

				mappingPolicy: "all", // Available values: "all", "restrict"
				logging: false
			}
		],

		assets: {
			folder: "public",
			options: {}
		}
	},
};