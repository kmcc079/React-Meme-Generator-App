const token = `326de9015d851a53823e881f19e31c37ab262f87d44f6f10`

export const server_calls = {
    get: async () => {
        const response = await fetch(`https://concrete-twilight-science.glitch.me/api/images`, {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`,
                'Access-Control-Allow_Origin': '*',
            }
        });

        if (!response.ok){
            throw new Error('Failed to fetch data from server');
        }

        return await response.json();
    },
    
    create: async (data: any = {}) => {
        const response = await fetch(`https://concrete-twilight-science.glitch.me/api/images`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`,
                'Access-Control-Allow_Origin': '*',
            },
            body: JSON.stringify(data)
        });

        if (!response.ok) {
            throw new Error('Failed to create new data on server');
        }

        return await response.json();
    },

    update: async (id: string, data: any = {}) => {
        const response = await fetch(`https://concrete-twilight-science.glitch.me/api/images/${id}`, {
            method: "PUT",
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`,
                'Access-Control-Allow_Origin': '*',
            },
            body: JSON.stringify(data)
        })

        if (!response.ok) {
            throw new Error('Failed to update data on server');
        }

        return await response.json();
    },

    delete: async (id: string) => {
        const response = await fetch(`https://concrete-twilight-science.glitch.me/api/images/${id}`, {
            method: "DELETE",
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`,
                'Access-Control-Allow_Origin': '*',
            }    
        });

        if (!response.ok) {
            throw new Error('Failed to delete data on server')
        }

        return;
    },
}