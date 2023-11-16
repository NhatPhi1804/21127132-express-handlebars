const controller = {};

controller.show = (req, res) =>{
    let salary = req.query.salary ? parseFloat(req.query.salary) : 0;
    let necAccount = 55 * salary / 100;
    let finFreeAccount = 10 * salary / 100;
    let giveAccount = 5 * salary / 100;
    res.render("task2", {
        necAccount: necAccount,
        finFreeAccount: finFreeAccount,
        giveAccount: giveAccount,
    });
}

module.exports = controller;