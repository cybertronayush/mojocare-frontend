const baseUrl = "https://sqecombackend.herokuapp.com/api";

export const getCookie = (name) => {
    var value = "; " + document.cookie;
    var parts = value.split("; " + name + "=");
    if (parts.length == 2) return parts.pop().split(";").shift();
};

export const setCookie = (name, value, days) => {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/";
};

const login = async ({ email, password }) => {
    return fetch(`${baseUrl}/login`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            email,
            password,
        }),
    }).then(async (res) => {
        const response = await res.json();
        setCookie("token", response.refresh_token, 7);
        setCookie("access_token", response.access_token, 1);
        return response;
    });
};

const register = async ({ name, email, password }) => {
    return fetch(`${baseUrl}/register`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            name,
            email,
            password,
            repeat_password: password,
        }),
    }).then((res) => {
        const response = res.json();
        setCookie("token", response.refresh_token, 7);
        setCookie("access_token", response.access_token, 1);
        return response;
    });
};

const logout = async () => {
    return fetch(`${baseUrl}/logout`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${getCookie("access_token")}`,
        },
        body: JSON.stringify({
            refresh_token: getCookie("token"),
        }),
    }).then((res) => {
        if (res.status === 200) {
            setCookie("token", "", -1);
            setCookie("access_token", "", -1);
        }
    });
};

const getProducts = async () => {
    return fetch(`${baseUrl}/products`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${getCookie("access_token")}`,
        },
    }).then((res) => {
        return res.json();
    });
};

const getProductById = async (id) => {
    return fetch(`${baseUrl}/products/new/${id}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${getCookie("access_token")}`,
        },
    }).then((res) => {
        return res.json();
    });
};

const addToCard = async (id) => {
    return fetch(`${baseUrl}/cart`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${getCookie("access_token")}`,
        },
        body: JSON.stringify({
            product_id: id,
        }),
    }).then((res) => {
        return res.json();
    });
};

const getProductsByCategory = async (category) => {
    return fetch(`${baseUrl}/products/${category}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${getCookie("access_token")}`,
        },
    }).then((res) => {
        return res.json();
    });
};

const getAppoinmentById = async(id)=>{
   return fetch(`${baseUrl}/products/new/${id}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
             Authorization: `Bearer ${getCookie("access_token")}`,
        },
    }).then((res) => {
        return res.json();
    });
}

const deleteAppoinment = async (id) => {
     return fetch(`${baseUrl}/products/new/${id}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${getCookie("access_token")}`,
        },
    }).then((res) => {
        return res.json();
    });

}

export const api = {
    login,
    register,
    logout,
    getProducts,
    getProductById,
    addToCard,
    getProductsByCategory,
    deleteAppoinment,
    getAppoinmentById
};
