function onGetRtValues (req, reply) {
};


function onPutRtValues (req, reply) {
      console.log(req.body.inductorTemperature1);
}

module.exports = {
    onGetRtValues: onGetRtValues,
    onPutRtValues: onPutRtValues
};
