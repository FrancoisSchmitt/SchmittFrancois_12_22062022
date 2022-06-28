import * as Call from './call';

export async function utilsUserInfos(id) {
      return Call.getUserInfos(id).then((data) => {
            try {
                  return {
                        erreur: '',
                        firstName: data.userInfos.firstName,
                  };
            } catch (err) {
                  return {
                        erreur: 'erreur',
                        firstName: '',
                  };
            }
      });
}
