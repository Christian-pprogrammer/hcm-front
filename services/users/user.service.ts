import http from "../http-common";

class UserService {
    create(data: any) {
        return http.post('/users/register', data);
    }
    usernameAvailable(username: string) {
        return http.get('/users/username/exists/' + username);
    }
    emailAvailable(email: string) {
        return http.get('/users/email/exists/' + email);
    }
    phoneAvailable(phone: string) {
        return http.get('/users/phone-number/exists/' + phone);
    }

    changeStatus(status: any, id: string) {
        return http.put(`/users/${id}/status/toggle/${status}`);
    }
    update(id: string, data: any) {
        return http.put(`/users/${id}`, data);
    }
    changePassword(id: string, data: any) {
        return http.put(`/users/update-password/${id}`, data);
    }

    getAll() {
        return http.get(`/users`);
    }

    get(id: string) {
        return http.get(`/users/${id}`);
    }
    delete(id: string) {
        return http.delete(`/users/${id}`);
    }

    uploadImage(id: string, formData: any) {
        return http.put(`/users/${id}/upload-profile/` + formData);
    }

    currentUser() {
        return http.get(`/users/current-user`);
    }

    loadProfileImage(filename: any) {
        return http.get(`/users/load-file/${filename}`);
    }

}

export default new UserService();
