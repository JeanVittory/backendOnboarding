import db from '@makeitrealcamp/db-mock';
/**
 *
 * @param {Request} req
 * @param {Response} res
 */
export const getTasks = (_, res) => {
	const result = db.findAll();
	if (!result.length) return res.status(404).json({ error: 'Database empty' });
	return res.status(200).json({ result });
};

/**
 *
 * @param {Request} req
 * @param {Response} res
 */
export const getTask = (req, res) => {
	const { id } = req.params;
	if (isNaN(id)) return res.status(400).json({ error: 'You must provide a valid id' });
	const task = db.findById(+id);
	if (!Object.values(task).length)
		return res.status(404).json({ error: "The product doesn't exist" });
	return res.status(200).json(task);
};

/**
 *
 * @param {Request} req
 * @param {Response} res
 */
export const postTask = (req, res) => {
	const task = req.body;
	if (!task) return res.status(400).json({ error: 'You must provide a task to aggregate' });
	const taskAdded = db.insert(task);
	if (!Object.values(taskAdded).length)
		return res.status(500).json({ error: 'Something went wrong' });
	return res.status(201).json(taskAdded);
};

/**
 *
 * @param {Request} req
 * @param {Response} res
 */
export const putTask = (req, res) => {
	const { id } = req.params;
	const { task } = req.body;
	if (isNaN(id) || !task || !id)
		return res.status(400).json({ error: 'You must provide a task and a valid id' });
	try {
		db.update({
			id: +id,
			task: task,
		});
		return res.status(200).json({ status: 'OK' });
	} catch (error) {
		return res.status(500).json({ error: error });
	}
};

/**
 *
 * @param {Request} req
 * @param {Response} res
 */
export const deleteTask = (req, res) => {
	const { id } = req.params;
	if (isNaN(id)) return res.status(400).json({ error: 'You must provide a valid id' });
	db.remove(+id);
	return res.status(200).json({ status: 'OK' });
};
