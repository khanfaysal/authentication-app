
import UserModel from "../model/user.model.js";

// POST: http://localhost:8080/api/register
export async function register(req, res) {
    try {
        const { username, password, profile, email } = req.body;

        // check the existing user

        const existUsername = new Promise((resolve, reject) => {
            UserModel.findOne({ username }, function (err, user) {
                if (err) reject(new Error(err))
                if (user) reject({ error: 'Please use unique username' });

                resolve();
            })
        });

    } catch (error) {
        return res.status(500).send(error);

    }
}

// POST: http://localhost:8080/api/login

export async function login(req, res) {
    res.json('login route');

}
// GET: http://localhost:8080/api/user/example123

export async function getUser(req, res) {
    res.json('Get user route');
}

// PUT: http://localhost:8080/api/updateuser

export async function updateUser(req, res) {
    res.json('updateUser route');
}

// GET: http://localhost:8080/api/generateOTP

export async function generateOTP(req, res) {
    res.json('generateOTP route');
}

// GET: http://localhost:8080/api/verifyOTP

export async function verifyOTP(req, res) {
    res.json('verifyOTP route');
}

// GET: http://localhost:8080/api/createResetSession

export async function createResetSession(req, res) {
    res.json('createResetSession route');
}

// PUT: http://localhost:8080/api/resetPassword

export async function resetPassword(req, res) {
    res.json('resetPassword route');
}