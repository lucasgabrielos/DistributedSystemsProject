using FinalProject.Core.Models;

namespace FinalProject.Core.Services
{
    public class UserService(DbContextProject context)
    {
        public void AddUser(UserModel userModel)
        {
            context.Users.Add(userModel);
            context.SaveChanges();
        }

        public void UpdateUser(UserModel userModel) 
        {
             context.Users.Update(userModel);
            context.SaveChanges();
        }

        public UserModel GetUser(string userId)
        {
            return context.Users.Find(userId); //Pode retornar null
        }

        public void DeleteUser(int userId) 
        {
            var user = context.Users.Find(userId);
            if (user != null)
            {
                context.Users.Remove(user);
                context.SaveChanges();
            }
        }
    }
}
