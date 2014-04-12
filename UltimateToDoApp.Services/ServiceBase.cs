using AutoMapper;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using UltimateToDoApp.Contracts;
using UltimateToDoApp.EntityFramework;
using UltimateToDoApp.EntityFramework.Entities;

namespace UltimateToDoApp.Services
{
    public class ServiceBase
    {
        public AppDbContext db = new AppDbContext();

        public ServiceBase()
        {
        }
    }
}
