import handleShops from '../../helpers/getShops';

const handler = async (req, res) => {
	const data = await handleShops();
	res.status(200).json(data);
};

export default handler;
