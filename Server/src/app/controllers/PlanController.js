import * as Yup from 'yup';
import Plan from '../models/Plan';

class PlansController {
  async store(req, res) {
    const schema = Yup.object().shape({
      title: Yup.string().required(),
      duration: Yup.number().required(),
      price: Yup.number().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    const { title, duration, price } = await Plan.create(req.body);

    return res.json({ title, duration, price });
  }

  async update(req, res) {
    const plan = await Plan.findByPk(req.params.id);
    if (!plan) {
      return res.status(400).json({ error: 'Plan Id does not exist' });
    }
    const schema = Yup.object().shape({
      title: Yup.string(),
      duration: Yup.number(),
      price: Yup.number(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    const { title, duration, price } = await plan.update(req.body);

    return res.json({ title, duration, price });
  }

  async index(req, res) {
    const plans = await Plan.findAll();

    return res.json(plans);
  }

  async delete(req, res) {
    const plan = await Plan.findByPk(req.params.id);
    if (!plan) {
      return res.status(400).json({ error: 'Plan Id does not exist' });
    }

    await plan.destroy({ where: { id: req.params.id } });

    return res.json({});
  }
}

export default new PlansController();
