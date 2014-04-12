using AutoMapper;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using UltimateToDoApp.Contracts;
using UltimateToDoApp.EntityFramework.Entities;

namespace UltimateToDoApp.Services
{
    public static class Mappings
    {
        public static void InitMappings()
        {
            Mapper.CreateMap<TaskEntity, TaskItemModel>().ReverseMap();
            Mapper.CreateMap<BoardEntity, BoardModel>().ReverseMap();
        }

        #region Task

        public static TaskItemModel ToModel(this TaskEntity entity)
        {
            return Mapper.Map<TaskItemModel>(entity);
        }

        public static TaskEntity ToEntity(this TaskItemModel model)
        {
            return Mapper.Map<TaskEntity>(model);
        }

        public static List<TaskItemModel> ToModelList(this DbSet<TaskEntity> entities)
        {
            return Mapper.Map<List<TaskItemModel>>(entities);
        }

        public static List<TaskItemModel> ToModelList(this IQueryable<TaskEntity> entities)
        {
            return Mapper.Map<List<TaskItemModel>>(entities);
        }
       
        #endregion

        #region Boards

        public static BoardModel ToModel(this BoardEntity entity)
        {
            return Mapper.Map<BoardModel>(entity);
        }

        public static BoardEntity ToEntity(this BoardModel model)
        {
            return Mapper.Map<BoardEntity>(model);
        }

        public static List<BoardModel> ToModelList(this DbSet<BoardEntity> entities)
        {
            return Mapper.Map<List<BoardModel>>(entities);
        }

        #endregion
    }
}
