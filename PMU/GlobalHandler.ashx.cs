using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.IO;

namespace PMU
{
    /// <summary>
    /// Summary description for GlobalHandler1
    /// </summary>
    public class GlobalHandler: IHttpHandler
    {

        public void ProcessRequest(HttpContext context)
        {
            //write your handler implementation here.
            HttpRequest request = context.Request;

            if (IsIE9(request))
            {
                byte[] buffer = new byte[request.ContentLength];
                using (BinaryReader br = new BinaryReader(request.Files["qqfile"].InputStream))
                    br.Read(buffer, 0, buffer.Length);

                string filename = Path.GetFileName(request.Files["qqfile"].FileName);
                File.WriteAllBytes(request.PhysicalApplicationPath + filename, buffer);
                context.Response.Write("{success:true}");
                context.Response.End();
            }
            else
            {
                byte[] buffer = new byte[request.ContentLength];
                using (BinaryReader br = new BinaryReader(request.InputStream))
                    br.Read(buffer, 0, buffer.Length);

                File.WriteAllBytes(request.PhysicalApplicationPath + request["qqfile"], buffer);
                context.Response.Write("{success:true}");
                context.Response.End();
            }
        }

        public bool IsReusable
        {
            get
            {
                return false;
            }
        }

        private bool IsIE9(HttpRequest request)
        {
            return request["qqfile"] == null;
        }
    }
}