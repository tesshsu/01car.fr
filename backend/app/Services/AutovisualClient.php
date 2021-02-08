<?php

namespace App\Services;

use GuzzleHttp\Exception\InvalidArgumentException;
use Illuminate\Support\Facades\Http;

class AutovisualClient
{
    /** @var string default base URL for Stripe's API */
    const DEFAULT_API_BASE = 'https://api.autovisual.com';

    /** @var array<string, mixed> */
    private $config;


    public function __construct($config)
    {
        if (!\is_array($config)) {
            throw new InvalidArgumentException('$config must be an array');
        }

        $this->validateConfig($config);

        $this->config = $config;

    }

    /**
     * Gets the API key used by the client to send requests.
     *
     * @return null|string the API key used by the client to send requests
     */
    public function getApiKey()
    {
        return $this->config['api_key'];
    }

    /**
     * Gets the API URL
     *
     * @return null|string the API URL to send requests
     */
    public function getApiUrl()
    {
        return $this->config['api_url'];
    }


    /**
     * @param array<string, mixed> $config
     *
     * @throws \Stripe\Exception\InvalidArgumentException
     */
    private function validateConfig($config)
    {
        // api_key
        if (!\is_string($config['api_key'])) {
            throw new InvalidArgumentException('api_key must be a string');
        }

        if (null !== $config['api_key'] && ('' === $config['api_key'])) {
            $msg = 'api_key cannot be the empty string';

            throw new \Stripe\Exception\InvalidArgumentException($msg);
        }

        if (null !== $config['api_key'] && (\preg_match('/\s/', $config['api_key']))) {
            $msg = 'api_key cannot contain whitespace';

            throw new \Stripe\Exception\InvalidArgumentException($msg);
        }

        // api_url
        if (!\is_string($config['api_url'])) {
            throw new InvalidArgumentException('api_url must be a string');
        }

    }

    /**
     * Creates a new source object.
     *
     * @param null|array $params
     *
     */
    public function getInfo($params = null, $opts = null)
    {
        return $this->request('post', '/v2/av', $params, $opts);
    }

    protected function request($method, $path, $params, $opts)
    {
        $params["key"] = $this->getApiKey();

        $res = Http::acceptJson()->asJson()
            ->baseUrl($this->getApiUrl())
            ->post('/v2/av', $params);

        return $res->json();
    }
}
