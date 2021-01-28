const check = async (req, res) => {

    try {
      return  res.status(200).json({"healthCheck": "OK"});
    } catch (error) {
        console.error(error);
      return  res.status(500).json('Failed to request');
    }
};


export { check };