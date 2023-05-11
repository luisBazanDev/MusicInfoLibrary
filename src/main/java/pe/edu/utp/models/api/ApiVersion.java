package pe.edu.utp.models.api;

public class ApiVersion {
    String version;
    String key;

    public ApiVersion(String version, String key) {
        this.version = version;
        this.key = key;
    }

    public String getKey() {
        return key;
    }

    public String getVersion() {
        return version;
    }
}
