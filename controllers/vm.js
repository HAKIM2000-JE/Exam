const Vm = require("../model/vm")


module.exports = {
    async addVmm(req, res) {
        
        const vm = new Vm({ nom: req.body.nom, adresseIP: req.body.adresseIP, etat: req.body.etat, system: req.body.system });
        res.send(await vm.save());
    },
    async getAllVm (req, res) {
        const vms = await Vm.find();
        res.send(vms);
    },
    async getVmbyId(req, res) {
        const email = req.params["id"];
        const user = await User.find({email:email});
        res.send(user);
    },
    
    async updateVmById(req, res) {
        const user = req.body;
        const id = req.params["id"];
        const findUserByEmail = User.findOne({email:id})
        const updatedUser = await User.findOneAndUpdate(findUserByEmail,user);
        res.send(user)
    },
    async deleteVmbyId(req, res) {
        const id = req.params["id"];
        const findUserByEmail = User.findOne({email:id})
        const deleteu = await findUserByEmail.remove();
        res.send(deleteu);
    },
    
}