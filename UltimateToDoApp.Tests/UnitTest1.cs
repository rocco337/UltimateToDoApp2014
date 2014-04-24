using System;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using System.Net.Http;
using UltimateToDoApp.Contracts;
using Newtonsoft.Json;
using System.Net.Http.Headers;
using System.Collections.Generic;
using UltimateToDoApp.WebApi.Controllers;
using UltimateToDoApp.Services;

namespace UltimateToDoApp.Tests
{
    [TestClass]
    public class UnitTest1
    {
        private string apiUrl = "http://localhost:3394/api/";

        TaskItemModel model = new TaskItemModel()
        {
            Category = 1,
            Created = DateTime.Now,
            Name = "Dentist appointemnt",
            UserId = 1,
            Id = "testguid"
        };

        [TestMethod]
        public void CreateUpdateTask()
        {           
            var content = CreateJsonContent(JsonConvert.SerializeObject(model));

            var response = (new HttpClient()).PostAsync(new Uri(apiUrl + "Tasks/CreateUpdateTask"), content).Result;

            var responseCompiled = JsonConvert.DeserializeObject<CreateUpdateTaskResponse>(response.Content.ReadAsStringAsync().Result);

            Assert.AreEqual(true, responseCompiled.Success);
            Assert.AreEqual(null, responseCompiled.Message);
        }

         [TestMethod]
        public void DeleteTask()
        {
            var content = CreateJsonContent(JsonConvert.SerializeObject(model));

            var response = (new HttpClient()).PostAsync(new Uri(apiUrl + "Tasks/DeleteTask"), content).Result;

            var responseCompiled = JsonConvert.DeserializeObject<HttpBaseResponse>(response.Content.ReadAsStringAsync().Result);

            Assert.AreEqual(true, responseCompiled.Success);
            Assert.AreEqual(null, responseCompiled.Message);
        }

         [TestMethod]
        public void GetTasks()
         {
             var response = (new HttpClient()).GetAsync(new Uri(apiUrl + "Tasks/GetTasks")).Result;
             
             var responseCompiled = JsonConvert.DeserializeObject<List<TaskItemModel>>(response.Content.ReadAsStringAsync().Result);

             Assert.AreEqual(5, responseCompiled.Count);

        }

        private StringContent CreateJsonContent(string content)
        {
            var stringContent = new StringContent(content);
            stringContent.Headers.ContentType = new MediaTypeHeaderValue("application/json");
            return stringContent;
        }

        [TestMethod]
        public void TestGetBoards()
        {
            //var controller = new BoardController(new BoardService());
            //controller
        }
    }
}
