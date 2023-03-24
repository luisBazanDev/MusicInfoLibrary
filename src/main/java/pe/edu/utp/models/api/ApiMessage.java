package pe.edu.utp.models.api;

import com.fasterxml.jackson.annotation.JsonInclude;

@JsonInclude(JsonInclude.Include.NON_NULL)
public class ApiMessage {
    private String message;
    private String apiVersion;
    public ApiMessage(String message) {
        this.message = message;
        this.apiVersion = "1.0";
    }

    public String getMessage() {
        return message;
    }

    public String getApiVersion() {
        return apiVersion;
    }
}
