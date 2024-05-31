import { PatientApiData } from '@/app/types/types';
import axios, { AxiosPromise } from 'axios';

export const PatientApi = (auth: string) => {
	const instance = axios.create({
	  baseURL: 'https://fedskillstest.coalitiontechnologies.workers.dev',
	  headers: {
		'Content-Type': 'application/json',
		'Authorization': `Basic ${auth}`
	  },
	});

	return {
		getPatients: async () => {
			return await instance.get('/');
		}
	}
};

export const getAllPatients = async () => {

	const username = process.env.NEXT_PUBLIC_API_USERNAME;
	const password = process.env.NEXT_PUBLIC_API_PASSWORD;

	const auth = btoa(`${username}:${password}`);

	const api = PatientApi(auth as string);
	const response = await api.getPatients();
	return response?.data as PatientApiData[];
}